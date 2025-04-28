function ErrorPage() {
  return (
    <div className="flex min-w-screen min-h-screen justify-center items-center">
      <div className="inline-block text-3xl font-bold text-center">
        <div>예상치 못한 오류가 발생하였습니다🚫</div>
        <div>잠시 후 다시 시도해주세요</div>
      </div>
    </div>
  );
}

export default ErrorPage;
