import "./App.css";
import { ethers } from "ethers";
function App() {
  const handelClick = async () => {
    console.log(window.ethereum);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    let balance = await provider.getBalance("ethers.eth");

    const domain = {
      name: "LazyNFT-Voucher",
      version: "1",
      chainId: 5,
      verifyingContract: "0xe4E678672B464fDF1B25FDCAd5bdff742EE74C00",
    };

    const types = {
      NFTVoucher: [
        { name: "tokenId", type: "uint256" },
        { name: "minPrice", type: "uint256" },
        { name: "uri", type: "string" },
      ],
    };

    // The data to sign
    const value = {
      tokenId: "0",
      minPrice: "1000000000",
      uri: "ipfs://fsdfvhsdgfhsgdjfgsjdfj",
    };

    let signature = await signer._signTypedData(domain, types, value);

    console.log(balance, signature);
  };

  return (
    <div className="App">
      <div className="flex-col justify-center h-screen ">
        <div className="max-w-[980px] mx-auto mt-[100px]">
          <div className="flex justify-center mb-10">
            <img src="https://www.sortcoder.tech/logo.png" />
          </div>
          <div className="lg:flex lg:items-center lg:justify-between bg-[#1f2937] py-10 px-5 text-white rounded-lg">
            <h2 className="text-2xl font-bold leading-7  sm:truncate sm:text-3xl sm:tracking-tight">
              NFT Lazy Mint
            </h2>
            <span className="sm:ml-3">
              <button
                onClick={handelClick}
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Mint
              </button>
            </span>
          </div>
          <div>
            <div className="mt-2 flex items-center text-sm text-gray-500 mt-5">
              Please use Goril Network for Mint Token. For more information----
              {">"}
              <a
                href="https://www.sortcoder.tech/"
                target="_blank"
                className="text-sky-500"
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
