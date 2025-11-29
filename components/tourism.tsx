"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, MapPin, Coffee, Utensils, ShoppingBag, Store, List } from "lucide-react"

interface TourismProps {
  onBack: () => void
}

export function Tourism({ onBack }: TourismProps) {
  const [viewMode, setViewMode] = useState<"map" | "list">("map")

  const places = [
    {
      id: 1,
      category: "cafe",
      name: "스타버스 생일카페",
      description: "BTS 정국 생일 카페 이벤트 진행중",
      distance: "500m",
      hours: "10:00 - 22:00",
      image: "/kpop-birthday-cafe-with-decorations.jpg",
      idol: "BTS",
    },
    {
      id: 2,
      category: "food",
      name: "명동교자",
      description: "BTS가 방문한 칼국수 맛집",
      distance: "1.2km",
      hours: "11:00 - 21:00",
      image: "/korean-restaurant-noodles.jpg",
      idol: "BTS",
    },
    {
      id: 3,
      category: "popup",
      name: "SM 팝업스토어",
      description: "NCT 굿즈 판매 중",
      distance: "800m",
      hours: "11:00 - 20:00",
      image: "/kpop-merchandise-store.jpg",
      idol: "NCT",
    },
    {
      id: 4,
      category: "shopping",
      name: "올리브영 명동점",
      description: "아이돌 협찬 화장품 전시",
      distance: "600m",
      hours: "09:00 - 23:00",
      image: "/korean-beauty-store-olive-young.jpg",
      idol: null,
    },
  ]

  const categories = [
    { id: "all", label: "전체", icon: MapPin },
    { id: "cafe", label: "카페", icon: Coffee },
    { id: "food", label: "맛집", icon: Utensils },
    { id: "popup", label: "팝업스토어", icon: Store },
    { id: "shopping", label: "쇼핑", icon: ShoppingBag },
  ]

  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPlaces = selectedCategory === "all" ? places : places.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6 sticky top-0 z-100 shadow-md">
        <div className="max-w-md mx-auto">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 mb-4 -ml-2" onClick={onBack}>
            <ChevronLeft className="w-5 h-5 mr-1" />
            뒤로
          </Button>
          <h1 className="text-2xl font-bold">숙식·관광 추천</h1>
          <p className="text-white/80 text-sm mt-1">공연장 주변 추천 장소</p>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        {/* Category Tabs */}
        <div className="p-4 bg-white border-b sticky top-[128px] z-100">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                className="flex-shrink-0"
                onClick={() => setSelectedCategory(category.id)}
              >
                <category.icon className="w-4 h-4 mr-1" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Map/List Toggle */}
        <div className="p-4 flex justify-end">
          <Button variant="outline" size="sm" onClick={() => setViewMode(viewMode === "map" ? "list" : "map")}>
            {viewMode === "map" ? <List className="w-4 h-4 mr-2" /> : <MapPin className="w-4 h-4 mr-2" />}
            {viewMode === "map" ? "리스트" : "지도"} 보기
          </Button>
        </div>

        {/* Map View */}
        {viewMode === "map" && (
          <div className="px-4">
            <Card className="p-4 mb-4 bg-muted">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/seoul-map-with-pins.jpg')] bg-cover bg-center opacity-50" />
                <div className="relative z-10 text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold">서울 올림픽공원 주변</p>
                  <p className="text-xs text-muted-foreground mt-1">반경 10km 내 추천 장소</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Places List */}
        <div className="p-4 space-y-4">
          {filteredPlaces.map((place) => (
            <Card key={place.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex">
                <div className="w-28 h-28 bg-muted flex-shrink-0">
                  <img
                    src={place.image || "/placeholder.svg"}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-base">{place.name}</h3>
                    {place.idol && (
                      <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">{place.idol}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{place.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {place.distance}
                    </span>
                    <span>{place.hours}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
