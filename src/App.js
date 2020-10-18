import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Segment, Header, Container, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
    return (
        <Container>
            <Segment raised>
                <Header>
                    <Header.Content>App</Header.Content>
                </Header>
                <Router>
                    <NavLink />
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/dashboard' component={Dashboard} />
                    </Switch>
                </Router>
            </Segment>
        </Container>
    );
}

function NavLink() {
    const [activeItem, setActiveItem] = useState('home');

    useEffect(() => {
        console.log('Component Mounted:', activeItem);
    }, [activeItem]);

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <Menu>
            <Menu.Item
                as={Link}
                to='/'
                name='home'
                content='Home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
            />
            <Menu.Item
                as={Link}
                to='/dashboard'
                name='dashboard'
                content='Dashboard'
                active={activeItem === 'dashboard'}
                onClick={handleItemClick}
            />
        </Menu>
    );
}

function HomePage(props) {
    console.log('HomePage: ', props);
    return (
        <Segment raised>
            <Header>
                <Header.Content>HomePage</Header.Content>
            </Header>
        </Segment>
    );
}

function Dashboard(props) {
    console.log('Dashboard: ', props);
    return (
        <Segment raised>
            <Header>
                <Header.Content>Dashboard</Header.Content>
            </Header>
        </Segment>
    );
}

export default App;
