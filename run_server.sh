cd server1 || exit
npm run dev &
echo "Server 1 started in background"
cd - || exit  # Return to the original folder

# Go to server2 folder and run the server script
cd server2 || exit
npm run dev &
echo "Server 2 started in background"
cd - || exit  # Return to the original folder

# Go to server3 folder and run the server script
cd server3 || exit
npm run dev &
echo "Server 3 started in background"
cd - || exit  # Return to the original folder

# Optional: Wait for all background servers to finish
wait

echo "All servers have been started."