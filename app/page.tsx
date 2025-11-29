"use client"

import { useState } from "react"
import { Home } from "@/components/home"
import { ConcertGuide } from "@/components/concert-guide"
import { Tourism } from "@/components/tourism"
import { Route } from "@/components/route"
import { Venue } from "@/components/venue"
import { Checklist } from "@/components/checklist"
import { BottomNav } from "@/components/bottom-nav"

type Page = "home" | "guide" | "tourism" | "route" | "venue" | "checklist"

export default function Page() {
  const [currentPage, setCurrentPage] = useState<Page>("home")

  return (
    // 최상위 요소를 Fragment로 변경합니다.
    <>
      {/* 1. 메인 콘텐츠 영역: 너비 제한 및 중앙 정렬, 하단 고정 바 공간 확보(pb-20) */}
      <div className="min-h-screen bg-background pb-20 max-w-md mx-auto">
        {currentPage === "home" && <Home onNavigate={setCurrentPage} />}
        {currentPage === "guide" && <ConcertGuide onBack={() => setCurrentPage("home")} />}
        {currentPage === "tourism" && <Tourism onBack={() => setCurrentPage("home")} />}
        {currentPage === "route" && <Route onBack={() => setCurrentPage("home")} />}
        {currentPage === "venue" && <Venue onBack={() => setCurrentPage("home")} />}
        {currentPage === "checklist" && <Checklist onBack={() => setCurrentPage("home")} />}
      </div>

      {/* 2. 하단 내비게이션 영역: 뷰포트 하단에 고정, 너비 제한 및 중앙 정렬 */}
      <div className="max-w-100 mx-auto">
        <BottomNav currentPage={currentPage} onNavigate={setCurrentPage} />
      </div>
    </>
  )
}