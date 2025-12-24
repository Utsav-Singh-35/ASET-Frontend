import React from 'react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import { useSidebar } from './hooks/useSidebar';
import './styles/chat.css';

function App() {
  const { isExpanded, activeItem, toggleSidebar, setActive } = useSidebar();
  const [currentView, setCurrentView] = React.useState('welcome');

  const handleItemClick = (item) => {
    setActive(item);

    if (item === 'history') {
      setCurrentView('history');
    } else if (item === 'current-chat') {
      setCurrentView('messages');
    } else if (item === 'trending') {
      alert('Trending page - Coming soon!');
    }
  };

  const handleNewChat = () => {
    setCurrentView('welcome');
    setActive('current-chat');
  };

  return (
    <div className="app-container">
      <Sidebar
        isExpanded={isExpanded}
        onToggle={toggleSidebar}
        activeItem={activeItem}
        onItemClick={handleItemClick}
        onNewChat={handleNewChat}
      />
      <ChatArea userName="Utsav Singh" />
    </div>
  );
}

export default App;
