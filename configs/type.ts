export interface IConfigEnv {
  API_URL: string;
  PUBLIC_PATH: string;
  BASE_NAME: string;
  DOMAIN_IMG: string;
  CONNECT: {
    DECIMAL_CHAIN_ID: number;
    HEX_CHAIN_ID: string;
    BLOCK_EXPLORER: string;
    RPC_URI: string;
    CHAIN_NAME: string
  },
  MULTIPLE_CHAIN: [
    {
      DECIMAL_CHAIN_ID: number;
      HEX_CHAIN_ID: string;
      BLOCK_EXPLORER: string;
      RPC_URI: string;
      RPC_CLIENT: string;
      CHAIN_NAME: string
    },
    {
      DECIMAL_CHAIN_ID: number;
      HEX_CHAIN_ID: string;
      BLOCK_EXPLORER: string;
      RPC_URI: string;
      RPC_CLIENT: string;
      CHAIN_NAME: string;
    },
    {
      DECIMAL_CHAIN_ID: number;
      HEX_CHAIN_ID: string;
      BLOCK_EXPLORER: string;
      RPC_URI: string;
      RPC_CLIENT: string;
      CHAIN_NAME: string;
    }
  ],
  CONTRACT: {
    "5": {
      weth: string,
      currencyManager: string,
      executionManager: string,
      transferSelectorNFT: string,
      transferManagerERC721: string,
      transferManagerERC1155: string,
      transferManagerNonCompliantERC721: string,
      nuwtonExchange: string,
      strategyStandardSaleForFixedPrice: string,
      strategyAnyItemFromCollectionForFixedPrice: string,
      strategyDutchAuction: string,
      strategyPrivateSale: string,
      strategyAnyItemInASetForFixedPrice: string,
      royaltyFeeRegistry: string,
      royaltyFeeManager: string,
      royaltyFeeSetter: string
    },
    "80001": {
      weth: string,
      currencyManager: string,
      executionManager: string,
      transferSelectorNFT: string,
      transferManagerERC721: string,
      transferManagerERC1155: string,
      transferManagerNonCompliantERC721: string,
      nuwtonExchange: string,
      strategyStandardSaleForFixedPrice: string,
      strategyAnyItemFromCollectionForFixedPrice: string,
      strategyDutchAuction: string,
      strategyPrivateSale: string,
      strategyAnyItemInASetForFixedPrice: string,
      royaltyFeeRegistry: string,
      royaltyFeeManager: string,
      royaltyFeeSetter: string
    },
    "137": {
      weth: string,
      currencyManager: string,
      executionManager: string,
      transferSelectorNFT: string,
      transferManagerERC721: string,
      transferManagerERC1155: string,
      transferManagerNonCompliantERC721: string,
      nuwtonExchange: string,
      strategyStandardSaleForFixedPrice: string,
      strategyAnyItemFromCollectionForFixedPrice: string,
      strategyDutchAuction: string,
      strategyPrivateSale: string,
      strategyAnyItemInASetForFixedPrice: string,
      royaltyFeeRegistry: string,
      royaltyFeeManager: string,
      royaltyFeeSetter: string
    }
  },
  FORMAT_NUMBER_FIXED: number,
  DEFAULT_CHAIN_ID: number,
  DEFAULT_GAS_PRICE: string
}
