import Image from "next/image";
import { Chat } from "@/components/chat/Chat";

export default function ChatPage() {
  return (
    <div className="flex h-[85vh] w-full flex-col overflow-hidden px-4">
      <div className="sticky top-0 z-10 flex h-14 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold">Chat with AI!</div>
        </div>
      </div>

      <div className="flex w-full flex-1 overflow-y-scroll">
        <Chat />
      </div>
    </div>
  );
}
