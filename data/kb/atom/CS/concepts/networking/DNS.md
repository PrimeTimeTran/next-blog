---
tags: []
---

## DNS

### DNS Servers

- Process that maps human friendly names to IP addresses
- FQDN(Full qualified domain name)
  - www --> service
  - google --> local domain
  - com --> top level domain
- Different Levels
  - Local DNS servers:
    - HOSTs file that map FQDN to IP
  - Top level servers:
    - .com, .org, .net, .edu, .gov, .mil, .int
    - "Kinda contain all the info". It delegates to other servers as well
  - Root server: Contains the records for the TLD servers
  - Authoratative servers:
    - Responds to requests.
    - Configured to contain the information.
    - Holds original record
  - Non Authorative DNS server
    - Responds with info from it got from another DNS(unoffficial)
    - 2nd or 3rd party response.

### DNS Records

- A record:
  - Maps hostnames to their IPv4 addresses
- AAAA record:
  - Maps FQDN to IPv6 addresses
- CName record:
  - Maps cannonical(alias) names to hostnames.
- PTR record:
  - Points out to DNS and tells them cannonical names to exist
- MX record:
  - Maps email servers. Sender to receiever

### Dynamic DDNS

- Lightweight
- Allows immediate updates to local DNS database.
- Provides software to monitor & update
- Useful for domains which have dynamic IP address(provided by ISP)
