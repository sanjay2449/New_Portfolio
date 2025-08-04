// components/LottieLoader.jsx
const LottieLoader = () => {
        return (
          <div className="fixed inset-0 bg-gradient-to-b from-[#0f172a] to-[#1e293b] z-[9999] flex items-center justify-center">
            <dotlottie-wc
              src="https://lottie.host/7401522f-2d8b-4049-ad18-eb0edb6af224/CE9lFrNlEH.json"
              speed="3"
              style={{ width: "500px", height: "500px" }}
              mode="normal"
              loop
              autoplay
              backgroundcolor="#03032D"
            />
          </div>
        );
      };
      
      export default LottieLoader;
      