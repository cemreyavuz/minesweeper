import { useMutation } from "react-query";

export const useCreateRoom = () => {
  return useMutation(({ peerId }: { peerId?: string }) => {
    if (!peerId) {
      throw new Error('peerId is required');
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
  });
};
