---
tags: []
---

## VPN

- Encrypted tunnel
- Once connection made, no longer seen as remote, viewed as local(even though remote).
- Cost is cheaper because no dedicated line required
- Types
  - Site to Site
  - Remote access VPN(host to site VPN): Allows specific users to connect. Must use VPN client software
  - Host to Host: SSL VPN

## VPN Protocols

- IPsec
  - Entire set
  - Layer 3 or above
  - Authentication Header(AH)
    - Transparent/Tunnel: Between two devices or between two sites
  - Encapsulating Security Payload(ESP)
    - Transparent/Tunnel: Between two devices or between two sites
    - Most popular
  - Internet Security Association and Key Management(ISAKMP)
    - Provides method for transferring security key and authentication data between systems outside of security key generating process, much more secure.
  - Generating Routing Encapsulating(GRE):
    - Can use wide variety of other network layer protocols
    - Often used to create subtunnel within IPsec connection. Only transfer IPsec packets.
  - Point to Point Tunneling Protocol(PPTP):
    - Supports dial up VPN connections
    - Wasn't secure, but it's been updated by Microsoft
  - Transport Layer Security(TLS) Protocol:
    - Cryptographic protocol
      - Asymmetric cryptograpgy
      - Negotiates a symmetrical security key
      - Largely replaced it's cousin secure socket layer protocol
      - Layer 5 and above
      - Most commonly creates secure encrypted internet session. SSL VPN
  - Secure Socket Layer(SSL) Protocol:
    - Largely been replaced.
    - v3.3 been to address issues but it may never catch up with TLS
