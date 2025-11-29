"use client"

import { Card } from "@/components/ui/card"
import { Music, MapPin, Navigation, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HomeProps {
  onNavigate: (page: "guide" | "tourism" | "route" | "venue" | "checklist") => void
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary-dark p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-white mb-8 pt-8">
          <h1 className="text-3xl font-bold mb-2">K-Pal</h1>
          <p className="text-white/80 text-sm">당신의 K-콘서트 가이드</p>
        </div>

        {/* Concert Info Card */}
        <Card className="bg-white p-6 mb-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
              <Music className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-lg mb-1">BTS World Tour</h2>
              <p className="text-sm text-muted-foreground mb-1">2024년 3월 15일 (금) 19:00</p>
              <p className="text-sm text-muted-foreground">서울 올림픽공원 체조경기장</p>
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
        <Button
          className="w-full bg-white text-primary hover:bg-white/90 shadow-md h-14 text-base font-semibold"
          onClick={() => onNavigate("checklist")}
        >
          준비물 체크리스트 확인하기
        </Button>
      </div>
    </div>
  )
}
