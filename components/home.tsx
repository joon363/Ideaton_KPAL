"use client"

import { Card } from "@/components/ui/card"
import { Calendar, Music, MapPin, Navigation, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HomeProps {
  onNavigate: (page: "guide" | "tourism" | "route" | "venue" | "checklist") => void
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-primary mb-8 pt-8">
          <h1 className="text-4xl font-bold mb-2">K-Pal</h1>
          <p className="text-primary/80 font-medium text-md">당신의 K-콘서트 가이드</p>
        </div>

        {/* Concert Info Card */}
        <Card className="bg-primary pt-3 pl-6 mb-6 shadow-lg">
          <div className = "space-y">
            <h2 className="font-bold text-white text-lg mb-1">현재 콘서트</h2>
            <div className="flex items-start mx-auto gap-4">
              
              <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                <Music className="w-10 h-10 text-white" />
              </div>
                <div className="flex-1 text-white">
                  <h2 className="font-bold text-lg mb-1">BTS World Tour</h2>
                  <div className="flex items-center gap-2 text-sm text-white mb-1">
                    <Calendar size={16} className="text-white" />
                    <span>2025년 11월 29일 (금) 19:00</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white">
                    <MapPin size={16} className="text-white" />
                    <span>고척 스카이돔</span>
                  </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Main Feature Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card
            className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onNavigate("guide")}
          >
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Music className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">콘서트 문화 가이드</h3>
            </div>
          </Card>

          <Card
            className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onNavigate("tourism")}
          >
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-sm">숙식·관광 추천</h3>
            </div>
          </Card>

          <Card
            className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onNavigate("route")}
          >
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center">
                <Navigation className="w-6 h-6 text-chart-2" />
              </div>
              <h3 className="font-semibold text-sm">이동 경로 안내</h3>
            </div>
          </Card>

          <Card
            className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onNavigate("venue")}
          >
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-chart-4/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-chart-4" />
              </div>
              <h3 className="font-semibold text-sm">공연장 시설 안내</h3>
            </div>
          </Card>
        </div>

        {/* Check Items Button */}
        <Card
            className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onNavigate("checklist")}
          >
            <div className="flex flex-col items-center text-center gap-3">
              <h3 className="w-full bg-white text-primary text-l font-semibold">준비물 체크리스트 확인하기</h3>
            </div>
          </Card>
      </div>
    </div>
  )
}
