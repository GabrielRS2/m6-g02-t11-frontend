import { createContext, useState, ReactNode, SetStateAction, Dispatch } from 'react';  


interface UpdateProductProviderProps {
	children: ReactNode
}

interface UpdateProductProviderData {
	updateProduct: boolean;
	setUpdateProduct: Dispatch<SetStateAction<boolean>>;
}

export const UpdateProductContext = createContext<UpdateProductProviderData>({} as UpdateProductProviderData);

export const UpdateProductProvider = ({ children }: UpdateProductProviderProps) => {
	const [updateProduct, setUpdateProduct] = useState<boolean>(false);
    
	return (
		<UpdateProductContext.Provider
		value={{ updateProduct, setUpdateProduct }}>
			{children}
		</UpdateProductContext.Provider>
	)
};