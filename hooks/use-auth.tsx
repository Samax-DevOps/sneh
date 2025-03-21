"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, userData?: Partial<User>) => Promise<void>
  logout: () => void
  isLoading: boolean
}

// Create context with a default undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Export the provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        console.error("Failed to parse user from localStorage")
        localStorage.removeItem("user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // This is a mock implementation
    // In a real app, you would call your authentication API

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock successful login
    const user: User = {
      id: "user-1",
      email,
      firstName: "John",
      lastName: "Doe",
    }

    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const register = async (email: string, password: string, userData?: Partial<User>) => {
    // This is a mock implementation
    // In a real app, you would call your registration API

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock successful registration
    const user: User = {
      id: "user-" + Math.random().toString(36).substr(2, 9),
      email,
      ...userData,
    }

    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const contextValue = {
    user,
    login,
    register,
    logout,
    isLoading,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

// Export the hook to use the context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

