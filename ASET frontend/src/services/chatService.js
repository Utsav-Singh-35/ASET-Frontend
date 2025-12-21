// Mock API service for chat functionality
// Replace these with actual API calls when backend is ready

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const chatService = {
    // Send a message and get AI response
    sendMessage: async (message, files = []) => {
        await delay(1000); // Simulate network delay

        // Mock AI response
        return {
            success: true,
            response: `This is a mock response to: "${message}". In production, this would be replaced with actual AI responses from your backend API.`,
            timestamp: new Date().toISOString()
        };
    },

    // Fetch chat history
    getChatHistory: async () => {
        await delay(500);

        // Mock chat history data
        return {
            success: true,
            chats: [
                {
                    id: 1,
                    name: 'Climate Change Discussion',
                    messageCount: 12,
                    lastUpdated: '2025-12-20T10:30:00Z',
                    createdAt: '2025-12-19T14:20:00Z'
                },
                {
                    id: 2,
                    name: 'COVID-19 Vaccine Facts',
                    messageCount: 8,
                    lastUpdated: '2025-12-19T16:45:00Z',
                    createdAt: '2025-12-19T15:10:00Z'
                },
                {
                    id: 3,
                    name: 'Moon Landing Verification',
                    messageCount: 15,
                    lastUpdated: '2025-12-18T09:15:00Z',
                    createdAt: '2025-12-17T11:30:00Z'
                }
            ]
        };
    },

    // Create a new chat
    createChat: async (initialMessage) => {
        await delay(300);

        return {
            success: true,
            chatId: Date.now(),
            message: 'Chat created successfully'
        };
    },

    // Update chat name
    updateChatName: async (chatId, newName) => {
        await delay(300);

        return {
            success: true,
            message: 'Chat name updated successfully'
        };
    },

    // Delete a chat
    deleteChat: async (chatId) => {
        await delay(300);

        return {
            success: true,
            message: 'Chat deleted successfully'
        };
    },

    // Load chat messages
    loadChatMessages: async (chatId) => {
        await delay(500);

        // Mock messages for the chat
        return {
            success: true,
            messages: [
                {
                    id: 1,
                    type: 'user',
                    content: 'Is climate change caused by human activity?',
                    timestamp: '2025-12-19T14:20:00Z'
                },
                {
                    id: 2,
                    type: 'bot',
                    content: 'Yes, according to overwhelming scientific consensus, climate change is primarily caused by human activities, particularly the emission of greenhouse gases like CO2 from burning fossil fuels.',
                    timestamp: '2025-12-19T14:20:15Z'
                }
            ]
        };
    }
};
