import { createContext, useState, ReactNode, SetStateAction, Dispatch } from 'react';  


interface OpenModalProviderProps {
	children: ReactNode
}

interface OpenModalProviderData {
	isOpenModal: boolean;
	setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const OpenModalContext = createContext<OpenModalProviderData>({} as OpenModalProviderData);

export const OpenModalProvider = ({ children }: OpenModalProviderProps) => {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    
	return (
		<OpenModalContext.Provider
		value={{ isOpenModal, setIsOpenModal }}>
			{children}
		</OpenModalContext.Provider>
	)
};