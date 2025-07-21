"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function ResourcesDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center font-bold space-x-1 text-gray-700 hover:text-red-500 cursor-pointer">
          <span>Resources</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 p-2 bg-white border-none" align="start">
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 p-3 text-gray-700 hover:text-blue-600">
          Blog & Articles
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 p-3 text-gray-700 hover:text-blue-600">
          Read FAQ's
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 p-3 text-gray-700 hover:text-blue-600">
          View Pricing
        </DropdownMenuItem>
        <Link href="/Support" target="_blank" rel="noopener noreferrer">
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 p-3 text-gray-700 hover:text-blue-600">
          Support Center
        </DropdownMenuItem>
        </Link>
        <Link href="/TalktoSales" target="_blank" rel="noopener noreferrer">
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 p-3 text-gray-700 hover:text-blue-600">
          Talk To Sales
        </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
