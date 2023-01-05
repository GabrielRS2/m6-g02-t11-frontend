import { createContext, useState, ReactNode } from 'react';  


interface UserIdProviderProps {
	children: ReactNode
}

interface UserIdProviderData {
	userId: string
	setUserId: (token: string) => void
}

export const UserIdContext = createContext<UserIdProviderData>({} as UserIdProviderData);

export const UserIdProvider = ({ children }: UserIdProviderProps) => {
	const [userId, setUserId] = useState<string>("");
    
	return (
		<UserIdContext.Provider
		value={{ userId, setUserId }}>
			{children}
		</UserIdContext.Provider>
	)
};