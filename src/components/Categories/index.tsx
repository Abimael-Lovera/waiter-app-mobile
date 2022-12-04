import { useState } from 'react';
import { FlatList } from 'react-native';

import { categories } from '../../mocks/categories';
import { Text } from '../Text';
import { Category, Icon } from './styles';

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  function handleSelectCategory(category: string) {
    setSelectedCategory(category);
  }

  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 24}}
        data={categories}
        keyExtractor={category => category._id}
        renderItem={({ item: category}) => {
          return (
            <Category
              key={category._id}
              onPress={() => handleSelectCategory(category._id)}
            >
              <Icon>
                <Text>{category.icon}</Text>
              </Icon>

              <Text size={14} weight="600">{category.name}</Text>
            </Category>
          );
        }}
      />
    </>
  );
}
