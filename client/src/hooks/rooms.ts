import {
  UseMutationOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

import { BASE_QUERY_KEY } from "common/constants";

type Room = {
  leader: string;
  name: string;
};

type CreateRoomData = {
  peerId?: string;
};

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

export const useCreateRoom = (
  options?: UseMutationOptions<unknown, unknown, CreateRoomData>
) => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ peerId }: CreateRoomData) => {
      if (!peerId) {
        throw new Error("peerId is required");
      }

      return fetch("http://localhost:4000/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${peerId}'s room`,
          leader: peerId,
        }),
      });
    },
    {
      onSuccess: (...args) => {
        queryClient.invalidateQueries(getRoomsQueryKey());
        options?.onSuccess?.(...args);
      },
      ...options,
    }
  );
};
