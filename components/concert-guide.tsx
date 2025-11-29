"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Camera, Volume2, Sparkles, Heart } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ConcertGuideProps {
  onBack: () => void
}

export function ConcertGuide({ onBack }: ConcertGuideProps) {
  const rules = [
    {
      icon: Camera,
      title: "촬영 금지",
      description: "공연 중 사진/동영상 촬영은 금지됩니다",
      color: "text-red-500",
    },
    {
      icon: Camera,
      title: "삼각대 금지",
      description: "삼각대 및 촬영 장비 반입 불가",
      color: "text-red-500",
    },
    {
      icon: Volume2,
      title: "과도한 함성 주의",
      description: "지정된 구역에서만 함성 가능",
      color: "text-orange-500",
    },
  ]

  const etiquette = [
    "공연 시작 30분 전 입장 권장",
    "좌석에서 일어서는 행동 자제",
    "공연 중 휴대폰 사용 금지",
    "주변 관객에게 방해되는 행동 자제",
    "공연 종료 후 질서있게 퇴장",
    "응원봉 과도하게 흔들지 않기",
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
          <h1 className="text-2xl font-bold">콘서트 문화 가이드</h1>
          <p className="text-white/80 text-sm mt-1">한국 콘서트 문화를 알아보세요</p>
        </div>
      </div>

      <div className="max-w-md mx-auto p-6 space-y-6">
        {/* Rules Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">필수 규칙</h2>
          <div className="space-y-3">
            {rules.map((rule, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full bg-muted ${rule.color}`}>
                    <rule.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{rule.title}</h3>
                    <p className="text-sm text-muted-foreground">{rule.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Etiquette Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">공연장 에티켓</h2>
          <Card className="p-6">
            <ul className="space-y-3">
              {etiquette.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Culture Guide Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">문화 안내</h2>
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="item-1" className="border rounded-lg px-4 bg-card">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="font-semibold">응원법 가이드</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pt-2">
                <ul className="space-y-2 ml-8">
                  <li>• 응원봉은 리듬에 맞춰 흔들어주세요</li>
                  <li>• 특정 구간에서 함성을 지를 수 있습니다</li>
                  <li>• 노래방 떼창은 자제해 주세요</li>
                  <li>• 아티스트의 멘트 중에는 조용히 들어주세요</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-4 bg-card">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-pink-500" />
                  <span className="font-semibold">슬로건 이벤트</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pt-2">
                <ul className="space-y-2 ml-8">
                  <li>• 입장 시 슬로건을 배포합니다</li>
                  <li>• 지정된 곡에서 슬로건을 펼쳐주세요</li>
                  <li>• 슬로건은 공연 종료 후 기념품으로 가져갈 수 있습니다</li>
                  <li>• 이벤트 진행은 당일 공지됩니다</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
