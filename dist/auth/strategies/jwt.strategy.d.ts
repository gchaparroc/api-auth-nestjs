import { PayloadInterface } from './../payload.interface';
import { ConfigService } from '@nestjs/config';
import { AuthRepository } from './../auth.repository';
import { Strategy } from 'passport-jwt';
import { UnauthorizedException } from '@nestjs/common';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authRepository;
    private readonly configService;
    constructor(authRepository: AuthRepository, configService: ConfigService);
    validate(payload: PayloadInterface): Promise<UnauthorizedException | PayloadInterface>;
}
export {};
