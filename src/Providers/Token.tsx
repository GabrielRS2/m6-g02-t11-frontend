import { createContext, useState, ReactNode } from 'react';  


interface TokenProviderProps {
	children: ReactNode
}

interface TokenProviderData {
	token: string
	setToken: (token: string) => void
}

export const TokenContext = createContext<TokenProviderData>({} as TokenProviderData);

export const TokenProvider = ({ children }: TokenProviderProps) => {
	const [token, setToken] = useState<string>("token");
    
	return (
		<TokenContext.Provider
		value={{ token, setToken }}>
			{children}
		</TokenContext.Provider>
	)
};