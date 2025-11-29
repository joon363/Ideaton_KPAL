"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, DoorOpen, Tablet as Toilet, Ticket, Accessibility, ShoppingBag } from "lucide-react"

interface VenueProps {
  onBack: () => void
}

export function Venue({ onBack }: VenueProps) {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null)

  const facilities = [
    { id: "entrance", icon: DoorOpen, label: "출입구", color: "text-blue-500" },
    { id: "toilet", icon: Toilet, label: "화장실", color: "text-green-500" },
    { id: "ticket", icon: Ticket, label: "매표소", color: "text-purple-500" },
    { id: "wheelchair", icon: Accessibility, label: "휠체어석", color: "text-orange-500" },
    { id: "md", icon: ShoppingBag, label: "MD 판매", color: "text-pink-500" },
  ]

  const facilityInfo: Record<string, { locations: string[]; description: string }> = {
    entrance: {
      locations: ["정문 (Gate 1)", "동측 출입구 (Gate 2)", "서측 출입구 (Gate 3)"],
      description: "좌석 구역에 따라 지정된 출입구를 이용해주세요.",
    },
    toilet: {
      locations: ["1층 로비 양측", "2층 복도 중앙", "3층 각 구역"],
      description: "각 층마다 여러 개의 화장실이 있습니다. 공연 시작 전 미리 이용하시기 바랍니다.",
    },
    ticket: {
      locations: ["정문 매표소", "온라인 티켓 발권기 (각 출입구)"],
      description: "현장 구매는 정문 매표소에서, 온라인 예매 티켓은 발권기를 이용하세요.",
    },
    wheelchair: {
      locations: ["1층 A구역 좌측", "1층 B구역 우측"],
      description: "휠체어석 이용 시 사전 예약이 필요합니다. 동반자 1인 동반 가능합니다.",
    },
    md: {
      locations: ["정문 로비", "2층 중앙 부스"],
      description: "공식 굿즈 판매는 공연 3시간 전부터 시작됩니다. 카드 결제 가능합니다.",
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6 sticky top-0 z-100 shadow-md">
        <div className="max-w-md mx-auto">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 mb-4 -ml-2" onClick={onBack}>
            <ChevronLeft className="w-5 h-5 mr-1" />
            뒤로
          </Button>
          <h1 className="text-2xl font-bold">공연장 시설 안내</h1>
          <p className="text-white/80 text-sm mt-1">올림픽공원 체조경기장</p>
        </div>
      </div>

      <div className="max-w-md mx-auto p-6 space-y-6">
        {/* Venue Map */}
        <Card className="p-6">
          <h2 className="font-semibold mb-4">공연장 평면도</h2>
          <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/concert-venue-floor-plan.jpg')] bg-cover bg-center opacity-30" />
            <div className="relative z-10 grid grid-cols-3 gap-4 p-8 w-full h-full">
              {/* Stage */}
              <div className="col-span-3 bg-primary/20 rounded-lg flex items-center justify-center border-2 border-primary">
                <span className="text-sm font-semibold text-primary">무대</span>
              </div>
              {/* Seating areas */}
              <div className="bg-muted rounded border flex items-center justify-center text-xs">A구역</div>
              <div className="bg-muted rounded border flex items-center justify-center text-xs">B구역</div>
              <div className="bg-muted rounded border flex items-center justify-center text-xs">C구역</div>
              <div className="bg-muted rounded border flex items-center justify-center text-xs">D구역</div>
              <div className="bg-muted rounded border flex items-center justify-center text-xs">E구역</div>
              <div className="bg-muted rounded border flex items-center justify-center text-xs">F구역</div>
            </div>
          </div>
        </Card>

        {/* Facility Filters */}
        <div>
          <h2 className="font-semibold mb-4">시설 선택</h2>
          <div className="grid grid-cols-3 gap-3">
            {facilities.map((facility) => (
              <Button
                key={facility.id}
                variant={selectedFacility === facility.id ? "default" : "outline"}
                className="h-auto flex-col gap-2 py-4"
                onClick={() => setSelectedFacility(facility.id)}
              >
                <facility.icon className={`w-6 h-6 ${selectedFacility === facility.id ? "" : facility.color}`} />
                <span className="text-xs">{facility.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Facility Information */}
        {selectedFacility && (
          <Card className="p-6 animate-in fade-in-50 slide-in-from-bottom-5">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              {facilities.find((f) => f.id === selectedFacility)?.icon && (
                <span className={facilities.find((f) => f.id === selectedFacility)?.color}>
                  {(() => {
                    const Icon = facilities.find((f) => f.id === selectedFacility)!.icon
                    return <Icon className="w-5 h-5" />
                  })()}
                </span>
              )}
              {facilities.find((f) => f.id === selectedFacility)?.label} 위치
            </h3>
            <div className="space-y-3 mb-4">
              {facilityInfo[selectedFacility].locations.map((location, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm">{location}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
              {facilityInfo[selectedFacility].description}
            </p>
          </Card>
        )}

        {/* Seat Navigation */}
        <Card className="p-6 bg-blue-50 border-blue-200">
          <h3 className="font-semibold mb-2 text-blue-900">내 좌석 찾기</h3>
          <p className="text-sm text-blue-800 mb-3">티켓의 구역 정보를 확인하세요. 예: A구역 → Gate 1 → 1층</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-blue-900">A, B, C 구역</span>
              <span className="text-blue-700">→ Gate 1 이용</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-900">D, E, F 구역</span>
              <span className="text-blue-700">→ Gate 2 이용</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
