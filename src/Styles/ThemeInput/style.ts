import styled from "styled-components";


export const StyledInput = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 8px;
	
  label{
		font-size: 14px;
    font-weight: 500;
    color: var(--grey1)
  }
  
	input{
		font-size: 16px;
  	font-weight: 400;
  	
		padding: 16px 24px;
  	
		border: 1.5px solid var(--grey7);
		border-radius: 5px;
		
  }
  input::placeholder{
		color: var(--grey3)
  }
	input:hover{
		background-color: var(--grey8);
		border-color: var(--grey8);
	}
	input:focus{
		border-color: var(--brand2)
	}
	
	textarea{
		width: 100%;
		height: 150px;
		resize: none;
		padding: 16px 24px;

		font-size: 16px;
  	font-weight: 400;
  	
		border: 1.5px solid var(--grey7);
		border-radius: 5px;
	}
	textarea::placeholder{
		color: var(--grey3)
  }
	textarea:hover{
		background-color: var(--grey8);
		border-color: var(--grey8);
	}
	/* textarea:focus{
		border-color: var(--brand2)
	} */
`
  