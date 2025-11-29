"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Plane, Train, Bus, Car, Clock, DollarSign } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface RouteProps {
  onBack: () => void
}

export function Route({ onBack }: RouteProps) {
  const [departure, setDeparture] = useState("incheon")

  const routes = [
    {
      id: "subway",
      icon: Train,
      title: "지하철",
      time: "1시간 20분",
      transfers: "2회 환승",
      cost: "₩2,500",
      steps: [
        "인천공항역 → 공항철도 탑승",
        "홍대입구역 하차 → 2호선 환승",
        "잠실역 하차 → 8호선 환승",
        "몽촌토성역 하차 (도보 10분)",
      ],
      color: "text-blue-500",
    },
    {
      id: "bus",
      icon: Bus,
      title: "버스",
      time: "1시간 40분",
      transfers: "환승 없음",
      cost: "₩15,000",
      steps: ["인천공항 → 6000번 리무진 버스", "잠실역 하차", "8호선 탑승 → 몽촌토성역"],
      color: "text-green-500",
    },
    {
      id: "taxi",
      icon: Car,
      title: "택시",
      time: "50분",
      transfers: "직행",
      cost: "₩65,000 ~ ₩80,000",
      steps: ["인천공항 택시 승강장", "올림픽공원 직행", "예상 요금: 심야/할증 시 변동"],
      color: "text-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6 sticky top-0 z-10 shadow-md">
        <div className="max-w-md mx-auto">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 mb-4 -ml-2" onClick={onBack}>
            <ChevronLeft className="w-5 h-5 mr-1" />
            뒤로
          </Button>
          <h1 className="text-2xl font-bold">이동 경로 안내</h1>
          <p className="text-white/80 text-sm mt-1">공항에서 공연장까지</p>
        </div>
      </div>

      <div className="max-w-md mx-auto p-6 space-y-6">
        {/* Departure Selection */}
        <Card className="p-6">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <Plane className="w-5 h-5 text-primary" />
            출발지 선택
          </h2>
          <RadioGroup value={departure} onValueChange={setDeparture}>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="incheon" id="incheon" />
              <Label htmlFor="incheon" className="cursor-pointer">
                인천국제공항
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="gimpo" id="gimpo" />
              <Label htmlFor="gimpo" className="cursor-pointer">
                김포국제공항
              </Label>
            </div>
          </RadioGroup>
        </Card>

        {/* Destination */}
        <Card className="p-6 bg-muted">
          <h3 className="font-semibold mb-2">도착지</h3>
          <p className="text-sm text-muted-foreground">고척스카이돔</p>
          <p className="text-xs text-muted-foreground mt-1">서울특별시 구로구 경인로 430</p>
        </Card>

        {/* Route Options */}
        <div>
          <h2 className="text-xl font-bold mb-4">경로 옵션</h2>
          <div className="space-y-4">
            {routes.map((route) => (
              <Card key={route.id} className="p-5 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full bg-muted ${route.color}`}>
                    <route.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{route.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {route.time}
                      </span>
                      <span>{route.transfers}</span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {route.cost}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {route.steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                          <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Language Notice */}
        <Card className="p-4 bg-blue-50 border-blue-200">
          <p className="text-sm text-blue-900">
            <span className="font-semibold">다국어 안내:</span> 지하철역과 버스 정류장에는 영어, 일본어, 중국어 안내가
            있습니다.
          </p>
        </Card>
      </div>
    </div>
  )
}
