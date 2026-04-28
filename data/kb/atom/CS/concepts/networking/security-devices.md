---
tags: []
---

## Security Devices

### Firewall

- Police Force of network
- \Can be on routers(software)
- Can be it's own device
- Operates on layers 2,3,4,7.
- Can block packets from entering or leaving(stateless inspection).
  - Examines every packet and compares to a set of rules
- State of connection between networks
  - Connection to internal to external.

### Intrusion Detection System(IDS)

- Passive system
- Designed to inform network admin
- Log files, text messages, email.
- Cannot stop or prevent.
- Recieves copy of all traffic and compares to set of standards
  - Signature: Evaluates for known malware or attack signatures
  - Anomaly: Evaluates network traffic for suspicious changes
  - Policy: Evalutes network traffic against a specific declared security policy.
- May be deployed at host level:
  - Host based intrusion detection system(HIDS)

### Intrustion Prevention System(IPS)

- Automated system to stop things
- Informs network admins though log files
- All traffic must flow through IPS
- Like IDS, all traffic is compared to standards
- Programmed to actively do something
  - Block offending IP addresses
  - Close vulnerable interface
  - Terminate network session
  - Redirect attack
  - more

### VPN Concentrator

- Allows for secure VPN connections to network
- Provide tunneling & encryption depending on config
- Layers 2, 3, 7
- Mostly use network layer, providing IPsec encryption through a secure tunnel.
