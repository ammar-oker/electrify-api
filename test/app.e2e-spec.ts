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
          data: {},
        };

        Object.keys(shape).forEach((key) => {
          expect(res.body).toHaveProperty(key);
        });
      });
  });

  afterAll((done) => {
    mongoose.connection.close();
    done();
  });
});
