---
tags: []
---

## DHCP in the Network

### Static vs Dynamic IP Addressing

- Computer told it's IP config from
- DHCP(Dynamic Host Configuration Protocol)
- Isn't require to be on the same local network segment.
- It'll get it from one of two ways
  - Statically(manually set)
    - Works fine for small & stable.
    - Error prone when larger.
    - Admin assigns IP & subnet mask to each host(PC, router, etc)
    - Admin also sssigns default gateway location & DNS server location to each host(required if access to outside networks are allowed or human friendly names are used)
    - Each time a change is made(new gateway established), each ip config on each host must be updated. Thus cumbersome
  - Dynamically(through a service like DHCP).
    - Config DHCP
    - Automates
    - Listens on specific port for IP info requests.
      - Responds with requested info

### How DHCP works

- Upon boot PC sends DHCP discovery packet.
  - Broadcasts to 255.255.255.255:67 UDP
- DHCP listens on that port. Once it receives it responds with offer packet. Sent back to the MAC address of the machine requesting help. Sent on port UDP 68.
- If the device uses network, it'll send request packet
- The DHCP server receives request packet then responds with acknowledgement packet
- Once device receives acknowledgement packet it updates it's IP config to reflect the info in the packet.

### Components and processes of DHCP

#### Address Scope

- Admin can reserve a pool of addresses.
- Admin configures the IP address range with one that is available to be handed out.
- Should only be used on devices that don't change IP addresses

#### Leases

- Hands out info
- But limits the time for the config
- Admin can configure how long that config is good for
- Config
  - Expiration
  - Default Gateway Location
  - DNS server addresses
  - Time server address
  - Many additional options

#### Preferrered IP Config

- Devices generally prefer previous IP Address
