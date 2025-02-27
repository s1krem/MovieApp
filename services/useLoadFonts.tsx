import { useFonts } from 'expo-font';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';

export function useLoadFonts() {
  const [fontsLoaded] = useFonts({
    BebasNeue_Regular: BebasNeue_400Regular,
    Lato_Regular: Lato_400Regular,
    Lato_Bold: Lato_700Bold,
  });

  return fontsLoaded;
}
