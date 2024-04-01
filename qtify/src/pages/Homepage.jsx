import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { fetchGenres } from '../api/api';
import Hero from '../components/Hero/Hero';
import styles from './Homepage.module.css';
import Section from '../components/Section/Section';

const Homepage = () => {
 const {data}=useOutletContext();
 const {newAlbums,topAlbums,songs}=data;
  return (
    <>
    <Hero/>
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album"/>
        <Section title="New Albums" data={newAlbums} type="album"/>
        <Section title="Songs" data={songs} fiterSource={fetchGenres} type="song"/>
      </div>
    </>
  )
}

export default Homepage