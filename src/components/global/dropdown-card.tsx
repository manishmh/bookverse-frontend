import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const DropdownCard = ({ className, children }: { className?: string, children?: ReactNode }) => {
  return (
    <div className={cn("bg-card-bg border border-card-border absolute w-[300px] h-[500px] right-0 top-full translate-y-2 max-w-[250px] sm:max-w-none", className )}>
        { children }
    </div>
  )
}

export default DropdownCard