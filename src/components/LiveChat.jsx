
import { MessageCircle } from "lucide-react";

function LiveChat() {
  const handleLiveChat = () => {
    // Replace this URL with your actual live chat service URL.
    window.open(
      "https://example.com",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      onClick={handleLiveChat}
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 rounded-full bg-blue-600 px-6 py-4 text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/50"
    >
      <MessageCircle size={22} />
      <span className="font-semibold">Live Chat</span>
    </button>
  );
}

export default LiveChat;
