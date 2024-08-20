# Reactive

This is a small PoC to use the `MutationObserver` to build a reactive system.
The observer observes a data attribute and when changes occur dependencies are updated.
Updates are incurred by user actions which then in turn updata the data attribute which triggers the observer.
