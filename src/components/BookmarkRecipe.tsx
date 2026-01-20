import { BookmarkIcon } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useState } from "react"
import { toast } from "sonner"

export function BookmarkRecipe() {

  const [isBookmarked, setIsBookmarked] = useState("")

  const handleBookmark = (e) => {
    if (!isBookmarked) {
      setIsBookmarked(e.target.value);
      toast.success("Added to My Kitchen!")
    }
    // toast.warning("Already added to kitchen");
    console.log(e);
  }

  return (
    <ToggleGroup type="single" variant="outline" size="lg">
      <ToggleGroupItem
        onClick={(e) => handleBookmark(e.target.value)}
        value={isBookmarked}
        aria-label="Toggle bookmark"
        className="data-[state=on]:bg-neutral-600/60 bg-neutral-600/50 backdrop-blur-xl data-[state=on]:*:[svg]:fill-green-600 data-[state=on]:*:[svg]:stroke-green-600"
      >
        <BookmarkIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
