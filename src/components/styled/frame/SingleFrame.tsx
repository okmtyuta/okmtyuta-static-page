import styled from 'styled-components';
import IStyled from '../IStyled';

export interface SingleFrameProps extends IStyled {
  maxWidth?: string;
}

export const SingleFrame = styled.div<SingleFrameProps>`
  margin: ${(props) => props.margin || '0'} auto;
  padding: ${(props) => props.padding || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  font-family: ${(props) => props.fontFamily || 'inherit'};
  color: ${(props) => props.color || 'inherit'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  border-radius: ${(props) => props.borderRadius || '0'};
  border: ${(props) => props.border || 'none'};
  outline: ${(props) => props.outline || 'none'};
  transition: ${(props) => props.transition || 'none'};
  font-family: ${(props) => props.fontFamily || 'inherit'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  border-radius: ${(props) => props.borderRadius || '0'};

  max-width: 800px;
`;
