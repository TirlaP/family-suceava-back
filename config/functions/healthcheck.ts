const startHealthCheck = (strapi) => {
  const checkHealth = async () => {
    try {
      const response = await fetch(`http://${strapi.config.get('server.host')}:${strapi.config.get('server.port')}/_health`);
      if (response.status === 204) {
        console.log('✅ Health check passed');
      } else {
        console.error('❌ Health check failed with status:', response.status);
      }
    } catch (error) {
      console.error('❌ Health check failed:', error);
    }
  };

  // Run health check every 30 seconds
  const interval = setInterval(checkHealth, 30000);

  // Run initial check
  checkHealth();

  // Clean up on server shutdown
  strapi.server.httpServer.on('close', () => {
    clearInterval(interval);
  });
};

export default startHealthCheck;