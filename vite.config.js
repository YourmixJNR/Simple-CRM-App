export default {
    build: {
      rollupOptions: {
        input: {
          index: './index.html', // Your main HTML file
          add: './add.html',     // Specify 'add.html' as an entry point
        },
      },
    },
  };
  