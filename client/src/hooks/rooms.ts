import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

import { BASE_QUERY_KEY } from "common/constants";

type Room = {
  id: string;
  leader: string;
  name: string;
};

type CreateRoomData = Room;

const getRoomsQueryKey = () => [BASE_QUERY_KEY, "rooms"];

export const useRooms = () => {
  return useQuery<Room[]>(getRoomsQueryKey(), () => {
    return fetch("http://localhost:4000/rooms", {
      method: "GET",
    })
      .then((rawResponse) => rawResponse.json())
      .then((jsonResponse) => jsonResponse.data);
  });
};

const getRoomQueryKey = (id: string) => [BASE_QUERY_KEY, "rooms", id];

export const useRoom = (id: string, options?: UseQueryOptions<Room>) => {
  return useQuery<Room>(
    getRoomQueryKey(id),
    () => {
      return fetch(`http://localhost:4000/rooms/${id}`, {
        method: "GET",
      })
        .then((rawResponse) => rawResponse.json())
        .then((jsonResponse) => jsonResponse.data);
    },
    options
  );
};

export const useCreateRoom = (
  options?: UseMutationOptions<unknown, unknown, CreateRoomData>
) => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, name, leader }: CreateRoomData) => {
      return fetch("http://localhost:4000/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          name,
          leader,
        }),
      }).then((rawResponse) => {
        if (!rawResponse.ok) {
          throw new Error("Error creating room");
        }
      });
    },
    {
      ...options,
      onSuccess: (...args) => {
        console.log("on success", args);
        queryClient.invalidateQueries(getRoomsQueryKey());
        options?.onSuccess?.(...args);
      },
    }
  );
};
