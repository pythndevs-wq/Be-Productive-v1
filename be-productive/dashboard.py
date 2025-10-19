import time
from plyer import notification

def start_timer(minutes):
    seconds = minutes * 60
    print(f"⏳ Timer started for {minutes} minutes...")
    while seconds:
        mins, secs = divmod(seconds, 60)
        timeformat = f"{mins:02d}:{secs:02d}"
        print(f"\r⏰ Time left: {timeformat}", end="")
        time.sleep(1)
        seconds -= 1

    notification.notify(
        title="⏰ Be Productive Timer Finished!",
        message=f"Your {minutes}-minute session is complete! Take a short break 😌",
        timeout=10  # seconds
    )
    print("\n✅ Time's up! Notification sent.")

if __name__ == "__main__":
    try:
        mins = int(input("Enter focus time in minutes: "))
        start_timer(mins)
    except ValueError:
        print("Please enter a valid number.")
