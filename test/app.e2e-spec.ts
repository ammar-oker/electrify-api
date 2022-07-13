import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import * as mongoose from 'mongoose';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/locations/${id} (GET)', () => {
    // TODO: unit test
  });

  it('/locations (GET)', () => {
    return request(app.getHttpServer())
      .get('/locations')
      .expect(200)
      .then((res) => {
        const shape = {
          sort: { by: '', type: '' },
          pagination: { page: 0, perPage: 0, total: 0 },
          data: {
            id: '',
            name: '',
            postalCode: '',
            location: '',
            lastUpdated: '',
            country: '',
          },
        };

        Object.keys(shape).forEach((key) => {
          expect(res.body).toHaveProperty(key);
        });

        Object.keys(shape.data).forEach((key) => {
          expect(res.body.data[0]).toHaveProperty(key);
        });

        Object.keys(shape.sort).forEach((key) => {
          expect(res.body.sort).toHaveProperty(key);
        });

        Object.keys(shape.pagination).forEach((key) => {
          expect(res.body.pagination).toHaveProperty(key);
        });
      });
  });

  afterAll((done) => {
    mongoose.connection.close();
    done();
  });
});
