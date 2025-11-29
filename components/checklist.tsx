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
  mandatory?: boolean // 필수 여부
  custom?: boolean
}

export function Checklist({ onBack }: ChecklistProps) {
  const [items, setItems] = useState<CheckItem[]>([
    // 필수 준비물
    { id: "1", label: "티켓", checked: false, mandatory: true },
    { id: "2", label: "신분증", checked: false, mandatory: true },
    { id: "3", label: "핸드폰", checked: false, mandatory: true },
    { id: "4", label: "응원봉", checked: false, mandatory: true },
    // 추천 준비물
    { id: "5", label: "슬로건", checked: false },
    { id: "6", label: "물", checked: false },
    { id: "7", label: "보조 배터리", checked: false },
    { id: "8", label: "마스크", checked: false },
    { id: "9", label: "손수건/티슈", checked: false },
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

  // 필수 / 추천으로 나누기
  const mandatoryItems = items.filter((i) => i.mandatory)
  const recommendedItems = items.filter((i) => !i.mandatory)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6 sticky top-0 z-10 shadow-md">
        <div className="max-w-md mx-auto">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 mb-4 -ml-2"
            onClick={onBack}
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            뒤로
          </Button>
          <h1 className="text-2xl font-bold">준비물 체크리스트</h1>
          <p className="text-white/80 text-sm mt-1">공연 전 준비물을 확인하세요</p>
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

        {/* 필수 준비물 */}
        <div>
          <h2 className="font-semibold mb-2">필수 준비물</h2>
          <div className="space-y-2">
            {mandatoryItems.map((item) => (
              <Card
                key={item.id}
                className={`p-4 cursor-pointer transition-all ${
                  item.checked ? "bg-primary/5 border-primary" : ""
                }`}
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-center gap-3">
                  {/* 빨간색 점 */}
                  <span className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0 mt-1"></span>
                  <span className={`${item.checked ? "line-through text-muted-foreground" : ""}`}>
                    {item.label}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 추천 준비물 */}
        <div>
          <h2 className="font-semibold mb-2">추천 준비물</h2>
          <div className="space-y-2">
            {recommendedItems.map((item) => (
              <Card
                key={item.id}
                className={`p-4 cursor-pointer transition-all ${
                  item.checked ? "bg-primary/5 border-primary" : ""
                }`}
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-center gap-3">
                  {/* 기본 점 (회색) */}
                  <span className="w-3 h-3 rounded-full bg-gray-400 flex-shrink-0 mt-1"></span>
                  <span className={`${item.checked ? "line-through text-muted-foreground" : ""}`}>
                    {item.label}
                  </span>
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
      </div>
    </div>
  )
}
