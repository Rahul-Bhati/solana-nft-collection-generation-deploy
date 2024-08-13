const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://eth-mainnet.g.alchemy.com/nft/v3/ADwgZClZhC47WLuGbuf8LLaqVPeJN2py/getNFTsForOwner?owner=0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045&withMetadata=true&pageSize=100', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  /*
PS F:\Web3\Projects\nf-marketplace\alchemy-demo\template\2-build> sugar show
[1/1] Looking up candy machine

Candy machine ID: Bcc3ZboU2krzsZqN6TKQYfdRDNnnDhLzb8YvRthyZZCx
 :
 :.. authority: ECEqT98So9JVhSY6uuzDCjBfhkzqeoku4vi8xa9QZK7K
 :.. mint authority: ECEqT98So9JVhSY6uuzDCjBfhkzqeoku4vi8xa9QZK7K
 :.. collection mint: E4b26uA7esgDxkZVZw4tgsbXht3i5pQh8bJXLhJLP3Yx
 :.. account version: V2
 :.. token standard: NonFungible
 :.. features: none
 :.. max supply: 0
 :.. items redeemed: 0
 :.. items available: 27
 :.. symbol: Tomo
 :.. seller fee basis points: 10% (1000)
 :.. is mutable: true
 :.. creators:
 :   :.. 1: 5rZv3dFVpj1kJFDdfif5gANUhGLXzRAB7uKUjDVq36Jn (100%)
 :.. hidden settings: none
 :.. config line settings:
     :.. prefix_name: Tomodachi #
     :.. name_length: 2
     :.. prefix_uri: https://arweave.net/
     :.. uri_length: 43
     :.. is_sequential: false
  */