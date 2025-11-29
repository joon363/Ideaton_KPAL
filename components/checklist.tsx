"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, CheckCircle2, Circle, Plus, X } from "lucide-react"
import { Input } from "@/components/ui/input"

interface ChecklistProps {
  onBack: () => void
}

interface CheckItem {
  id: string
  label: string
  checked: boolean
  custom?: boolean
}

export function Checklist({ onBack }: ChecklistProps) {
  const [items, setItems] = useState<CheckItem[]>([
    { id: "1", label: "물", checked: false },
    { id: "2", label: "보조배터리", checked: false },
    { id: "3", label: "응원봉", checked: false },
    { id: "4", label: "티켓", checked: false },
    { id: "5", label: "신분증", checked: false },
    { id: "6", label: "슬로건", checked: false },
    { id: "7", label: "마스크", checked: false },
    { id: "8", label: "손수건/티슈", checked: false },
  ])

  const [newItem, setNewItem] = useState("")
  const [showInput, setShowInput] = useState(false)

  const toggleItem = (id: string) => {
    setItems(items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)))
  }

  const addCustomItem = () => {
    if (newItem.trim()) {
      setItems([
        ...items,
        {
          id: Date.now().toString(),
          label: newItem.trim(),
          checked: false,
          custom: true,
        },
      ])
      setNewItem("")
      setShowInput(false)
    }
  }

  const removeCustomItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const checkedCount = items.filter((item) => item.checked).length
  const progress = Math.round((checkedCount / items.length) * 100)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6 sticky top-0 z-10 shadow-md">
        <div className="max-w-md mx-auto">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 mb-4 -ml-2" onClick={onBack}>
            <ChevronLeft className="w-5 h-5 mr-1" />
            뒤로
          </Button>
          <h1 className="text-2xl font-bold">준비물 체크리스트</h1>
          <p className="text-white/80 text-sm mt-1">공연 전 필수 준비물 확인</p>
        </div>
      </div>

      <div className="max-w-md mx-auto p-6 space-y-6">
        {/* Progress */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">완료율</h2>
            <span className="text-2xl font-bold text-primary">{progress}%</span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {checkedCount} / {items.length} 항목 완료
          </p>
        </Card>

        {/* Checklist Items */}
        <div>
          <h2 className="font-semibold mb-4">체크리스트</h2>
          <div className="space-y-2">
            {items.map((item) => (
              <Card
                key={item.id}
                className={`p-4 cursor-pointer transition-all ${item.checked ? "bg-primary/5 border-primary" : ""}`}
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {item.checked ? (
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    ) : (
                      <Circle className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                    )}
                    <span className={`${item.checked ? "line-through text-muted-foreground" : ""}`}>{item.label}</span>
                  </div>
                  {item.custom && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={(e) => {
                        e.stopPropagation()
                        removeCustomItem(item.id)
                      }}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Add Custom Item */}
        <div>
          {showInput ? (
            <div className="flex gap-2">
              <Input
                placeholder="항목 입력..."
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addCustomItem()}
                autoFocus
              />
              <Button onClick={addCustomItem}>추가</Button>
              <Button
                variant="outline"
                onClick={() => {
                  setShowInput(false)
                  setNewItem("")
                }}
              >
                취소
              </Button>
            </div>
          ) : (
            <Button variant="outline" className="w-full bg-transparent" onClick={() => setShowInput(true)}>
              <Plus className="w-4 h-4 mr-2" />
              항목 추가
            </Button>
          )}
        </div>

        {/* Reminder Notice */}
        <Card className="p-4 bg-yellow-50 border-yellow-200">
          <h3 className="font-semibold mb-2 text-yellow-900">🔔 알림 설정</h3>
          <p className="text-sm text-yellow-800">공연 3시간 전에 준비물 확인 알림을 받으실 수 있습니다.</p>
          <Button variant="outline" className="w-full mt-3 border-yellow-300 text-yellow-900 bg-transparent">
            알림 설정하기
          </Button>
        </Card>
      </div>
    </div>
  )
}
