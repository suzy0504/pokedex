import { useRouter } from "next/navigation";
import React from "react";

const BackBtn = () => {
  const router = useRouter();

  return (
    <div>
      <button
        type="button"
        onClick={() => router.back()}
        className="mt-6 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-700"
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default BackBtn;
