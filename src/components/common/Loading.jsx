import { CircularProgress } from "@mui/material";

function Loading() {
  return (
    <div className="flex min-w-screen min-h-screen justify-center items-center">
      <CircularProgress />
    </div>
  );
}

export default Loading;
