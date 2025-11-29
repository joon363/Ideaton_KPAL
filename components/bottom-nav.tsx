"use client"

import { Home, Book, Map, ListChecks } from "lucide-react"
import { cn } from "@/lib/utils"

interface BottomNavProps {
  currentPage: string
  onNavigate: (page: "home" | "guide" | "tourism" | "checklist") => void
}

export function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  const items = [
    { id: "home", icon: Home, label: "홈" },
    { id: "guide", icon: Book, label: "가이드" },
    { id: "tourism", icon: Map, label: "관광" },
    { id: "checklist", icon: ListChecks, label: "체크리스트" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-20">
      <div className="max-w-100 mx-auto grid grid-cols-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as any)}
            className={cn(
              "flex flex-col items-center justify-center py-3 transition-colors",
              currentPage === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
