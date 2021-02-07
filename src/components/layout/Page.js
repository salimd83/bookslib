import styled from 'styled-components';
import Divider from '../../ui/core/Divider';

const Header = styled.div`
    min-height: 38px;
    padding: 0 24px;
`;

const Content = styled.div`
    padding: 0 24px;
`;

function Page({title, children, ...rest}) {
    return (
        <div {...rest}>
            <Header>
                <h1>{title}</h1>
                <Divider />
            </Header>
            <Content>
                {children}
            </Content>
        </div>
    )
}

export default Page;