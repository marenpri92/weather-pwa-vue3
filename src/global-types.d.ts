interface BeforeInstallPromptEvent extends Event {
readonly platforms: Array<string>;
readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed',
    platform: string
}>;
prompt(): Promise<void>;

}

//necesary to accept the prompt() function
interface ServiceWorkerGlobalScopeEventMap { 
    "beforeinstallprompt": BeforeInstallPromptEvent; 
}