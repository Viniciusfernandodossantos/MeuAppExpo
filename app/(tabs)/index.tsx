import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FBE8A6', dark: '#8B5E3C' }}
      headerImage={
        
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo à Padoca Delícia!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">🥐 Destaques do Dia</ThemedText>
        <ThemedText>- Pão francês crocante</ThemedText>
        <ThemedText>- Sonho com creme</ThemedText>
        <ThemedText>- Café especial moído na hora</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">🕘 Horário de Funcionamento</ThemedText>
        <ThemedText>Seg a Sáb: 06h às 19h</ThemedText>
        <ThemedText>Domingos: 07h às 13h</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">📍 Endereço</ThemedText>
        <ThemedText>Rua das Rosas, 123 - Centro</ThemedText>
        <ThemedText>Cidade do Pão, SP</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">📱 Dica!</ThemedText>
        <ThemedText>
          Toque na aba "Produtos" abaixo para ver todos os itens fresquinhos disponíveis.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">👩‍🍳 Equipe</ThemedText>
        <ThemedText>Feito com carinho pela família Souza desde 1998.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Pressione{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          para abrir as ferramentas de desenvolvedor.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 12,
    marginHorizontal: 12,
  },
  reactLogo: {
    height: 200,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
