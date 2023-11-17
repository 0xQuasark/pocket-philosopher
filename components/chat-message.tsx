"use client"
import { useTheme } from "next-themes";
import { BeatLoader } from "react-spinners"
import { Copy, Play } from "lucide-react";

import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast"
import { BotAvatar } from "@/components/bot-avatar";
import { UserAvatar } from "@/components/user-avatar";
import { Button } from "@/components/ui/button";

import OpenAI from "openai";

export interface ChatMessageProps {
  role: "system" | "user",
  content?: string,
  isLoading?: boolean,
  src?: string
}

export const ChatMessage = ({
  role,
  content,
  isLoading,
  src
}: ChatMessageProps) => {
  const { toast } = useToast();
  const { theme } = useTheme();

  const onCopy = () => {
    if (!content) {
      // it's ok if the message has no content
      return;
    }

    navigator.clipboard.writeText(content);
    toast({
      description: "Message copied to clipboard",
    });
  }

  const onPlay = async () => {
    if (!content) {
      // it's ok if the message has no content
      return;
    }

    // MVP goes here

    toast({
      description: "Message queued to play audio",
    });
  }


  return (
    <div className={cn(
      "group flex items-start gap-x-3 py-4 w-full",
      role === "user" && "justify-end"    // if the user is talking, we want the message on the right
    )}>
      {role !== "user" && src && <BotAvatar src={src} />}
      <div className="rounded-md px-4 py-2 max-w-sm text-sm bg-primary/10">
        {isLoading
          ? <BeatLoader 
              size={5}
              color={theme === "light" ? "black" : "white"}
            />
          : content
        }
      </div>
      {role === "user" && <UserAvatar />}
      {role !== "user" && !isLoading && (
        <>
          <Button
            onClick={onCopy}
            className="opacity-0 group-hover:opacity-100 transition" // opacity-0 hides it, until the hover
            size="icon"
            variant="ghost"
          >
            <Copy className="w-4 h-4" />
          </Button>
          <Button
          onClick={onPlay} 
          className="opacity-0 group-hover:opacity-100 transition"
          size="icon"
          variant="ghost"
        >
          <Play className="w-4 h-4" /> 
        </Button>
      </>
      
      )}
    </div>
  )
}