---
id: power-storage
title: Power and Storage Recommendations
sidebar_position: 3
---

## Power Handling

:::warning
While CAMMRA AI is running, the power source **must not be disconnected**.
:::

The application continuously accesses storage and may send events to external systems. Interrupting power can lead to unpredictable behavior.

---

## Storage Options

CAMMRA AI can use:

- Internal camera storage
- SD card storage (recommended)

### SD Card Recommendation

Using an SD card is strongly recommended for traffic deployments and integrations with external systems.

- Recommended capacity: **128 GB**
- Maximum stored events: **100,000**
- Older events are overwritten automatically

### Internal Storage Capacity (No SD Card)

| Image Type | Capacity |
|----------|----------|
| Full frame (580 MB internal) | ~1000 events |

---

### SD Card Notes

- CAMMRA AI monitors SD card availability
- The application restarts automatically when an SD card becomes available
- The application must be restarted after SD card installation
- SD card must not be disabled while the application is running
